import algosdk from 'algosdk';
import { AlgorandClient } from '@algorandfoundation/algokit-utils';
import * as fs from 'fs';
import { saveTransaction } from '../api/supabase.js';
const writeVault = async (mnemonic, value) => {
    const arc56Contract = {
        "name": "AlgoflowVault",
        "structs": {},
        "methods": [
            {
                "name": "writeData",
                "args": [
                    {
                        "type": "string",
                        "name": "inputData"
                    }
                ],
                "returns": {
                    "type": "void"
                },
                "actions": {
                    "create": [],
                    "call": [
                        "NoOp"
                    ]
                },
                "readonly": false,
                "events": [],
                "recommendations": {}
            },
            {
                "name": "getData",
                "args": [],
                "returns": {
                    "type": "string"
                },
                "actions": {
                    "create": [],
                    "call": [
                        "NoOp"
                    ]
                },
                "readonly": true,
                "events": [],
                "recommendations": {}
            }
        ],
        "arcs": [
            22,
            28
        ],
        "networks": {},
        "state": {
            "schema": {
                "global": {
                    "ints": 0,
                    "bytes": 1
                },
                "local": {
                    "ints": 0,
                    "bytes": 0
                }
            },
            "keys": {
                "global": {
                    "data": {
                        "keyType": "AVMString",
                        "valueType": "AVMString",
                        "key": "ZGF0YQ=="
                    }
                },
                "local": {},
                "box": {}
            },
            "maps": {
                "global": {},
                "local": {},
                "box": {}
            }
        },
        "bareActions": {
            "create": [
                "NoOp"
            ],
            "call": []
        },
        "sourceInfo": {
            "approval": {
                "sourceInfo": [
                    {
                        "pc": [
                            52,
                            81
                        ],
                        "errorMessage": "OnCompletion is not NoOp"
                    },
                    {
                        "pc": [
                            104
                        ],
                        "errorMessage": "can only call when creating"
                    },
                    {
                        "pc": [
                            55,
                            84
                        ],
                        "errorMessage": "can only call when not creating"
                    },
                    {
                        "pc": [
                            118
                        ],
                        "errorMessage": "check GlobalState exists"
                    }
                ],
                "pcOffsetMethod": "none"
            },
            "clear": {
                "sourceInfo": [],
                "pcOffsetMethod": "none"
            }
        },
        "source": {
            "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgMSAwCiAgICBieXRlY2Jsb2NrICJkYXRhIgogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGJueiBtYWluX2FmdGVyX2lmX2Vsc2VAMgogICAgLy8gc21hcnRfY29udHJhY3RzL2FsZ29mbG93X3ZhdWx0L2NvbnRyYWN0LmFsZ28udHM6NQogICAgLy8gcHVibGljIGRhdGEgPSBHbG9iYWxTdGF0ZTxzdHJpbmc+KHsgaW5pdGlhbFZhbHVlOiAnJyB9KQogICAgYnl0ZWNfMCAvLyAiZGF0YSIKICAgIHB1c2hieXRlcyAiIgogICAgYXBwX2dsb2JhbF9wdXQKCm1haW5fYWZ0ZXJfaWZfZWxzZUAyOgogICAgLy8gc21hcnRfY29udHJhY3RzL2FsZ29mbG93X3ZhdWx0L2NvbnRyYWN0LmFsZ28udHM6MwogICAgLy8gZXhwb3J0IGNsYXNzIEFsZ29mbG93VmF1bHQgZXh0ZW5kcyBDb250cmFjdCB7CiAgICB0eG4gTnVtQXBwQXJncwogICAgYnogbWFpbl9iYXJlX3JvdXRpbmdAOQogICAgcHVzaGJ5dGVzcyAweDEwMTljNjY4IDB4NTg1MjRjYjUgLy8gbWV0aG9kICJ3cml0ZURhdGEoc3RyaW5nKXZvaWQiLCBtZXRob2QgImdldERhdGEoKXN0cmluZyIKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDAKICAgIG1hdGNoIG1haW5fd3JpdGVEYXRhX3JvdXRlQDUgbWFpbl9nZXREYXRhX3JvdXRlQDYKCm1haW5fYWZ0ZXJfaWZfZWxzZUAxMzoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hbGdvZmxvd192YXVsdC9jb250cmFjdC5hbGdvLnRzOjMKICAgIC8vIGV4cG9ydCBjbGFzcyBBbGdvZmxvd1ZhdWx0IGV4dGVuZHMgQ29udHJhY3QgewogICAgaW50Y18xIC8vIDAKICAgIHJldHVybgoKbWFpbl9nZXREYXRhX3JvdXRlQDY6CiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czoxMgogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlIH0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICBhc3NlcnQgLy8gT25Db21wbGV0aW9uIGlzIG5vdCBOb09wCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBub3QgY3JlYXRpbmcKICAgIGNhbGxzdWIgZ2V0RGF0YQogICAgZHVwCiAgICBsZW4KICAgIGl0b2IKICAgIGV4dHJhY3QgNiAyCiAgICBzd2FwCiAgICBjb25jYXQKICAgIHB1c2hieXRlcyAweDE1MWY3Yzc1CiAgICBzd2FwCiAgICBjb25jYXQKICAgIGxvZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKbWFpbl93cml0ZURhdGFfcm91dGVANToKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9hbGdvZmxvd192YXVsdC9jb250cmFjdC5hbGdvLnRzOjcKICAgIC8vIEBhYmltZXRob2QoKQogICAgdHhuIE9uQ29tcGxldGlvbgogICAgIQogICAgYXNzZXJ0IC8vIE9uQ29tcGxldGlvbiBpcyBub3QgTm9PcAogICAgdHhuIEFwcGxpY2F0aW9uSUQKICAgIGFzc2VydCAvLyBjYW4gb25seSBjYWxsIHdoZW4gbm90IGNyZWF0aW5nCiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czozCiAgICAvLyBleHBvcnQgY2xhc3MgQWxnb2Zsb3dWYXVsdCBleHRlbmRzIENvbnRyYWN0IHsKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGV4dHJhY3QgMiAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czo3CiAgICAvLyBAYWJpbWV0aG9kKCkKICAgIGNhbGxzdWIgd3JpdGVEYXRhCiAgICBpbnRjXzAgLy8gMQogICAgcmV0dXJuCgptYWluX2JhcmVfcm91dGluZ0A5OgogICAgLy8gc21hcnRfY29udHJhY3RzL2FsZ29mbG93X3ZhdWx0L2NvbnRyYWN0LmFsZ28udHM6MwogICAgLy8gZXhwb3J0IGNsYXNzIEFsZ29mbG93VmF1bHQgZXh0ZW5kcyBDb250cmFjdCB7CiAgICB0eG4gT25Db21wbGV0aW9uCiAgICBibnogbWFpbl9hZnRlcl9pZl9lbHNlQDEzCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgYXNzZXJ0IC8vIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgaW50Y18wIC8vIDEKICAgIHJldHVybgoKCi8vIHNtYXJ0X2NvbnRyYWN0cy9hbGdvZmxvd192YXVsdC9jb250cmFjdC5hbGdvLnRzOjpBbGdvZmxvd1ZhdWx0LndyaXRlRGF0YShpbnB1dERhdGE6IGJ5dGVzKSAtPiB2b2lkOgp3cml0ZURhdGE6CiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czo3LTgKICAgIC8vIEBhYmltZXRob2QoKQogICAgLy8gcHVibGljIHdyaXRlRGF0YShpbnB1dERhdGE6IHN0cmluZyk6IHZvaWQgewogICAgcHJvdG8gMSAwCiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czo1CiAgICAvLyBwdWJsaWMgZGF0YSA9IEdsb2JhbFN0YXRlPHN0cmluZz4oeyBpbml0aWFsVmFsdWU6ICcnIH0pCiAgICBieXRlY18wIC8vICJkYXRhIgogICAgLy8gc21hcnRfY29udHJhY3RzL2FsZ29mbG93X3ZhdWx0L2NvbnRyYWN0LmFsZ28udHM6OQogICAgLy8gdGhpcy5kYXRhLnZhbHVlID0gaW5wdXREYXRhCiAgICBmcmFtZV9kaWcgLTEKICAgIGFwcF9nbG9iYWxfcHV0CiAgICByZXRzdWIKCgovLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czo6QWxnb2Zsb3dWYXVsdC5nZXREYXRhKCkgLT4gYnl0ZXM6CmdldERhdGE6CiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czo1CiAgICAvLyBwdWJsaWMgZGF0YSA9IEdsb2JhbFN0YXRlPHN0cmluZz4oeyBpbml0aWFsVmFsdWU6ICcnIH0pCiAgICBpbnRjXzEgLy8gMAogICAgYnl0ZWNfMCAvLyAiZGF0YSIKICAgIGFwcF9nbG9iYWxfZ2V0X2V4CiAgICBhc3NlcnQgLy8gY2hlY2sgR2xvYmFsU3RhdGUgZXhpc3RzCiAgICAvLyBzbWFydF9jb250cmFjdHMvYWxnb2Zsb3dfdmF1bHQvY29udHJhY3QuYWxnby50czoxNAogICAgLy8gcmV0dXJuIHRoaXMuZGF0YS52YWx1ZQogICAgcmV0c3ViCg==",
            "clear": "I3ByYWdtYSB2ZXJzaW9uIDEwCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg=="
        },
        "byteCode": {
            "approval": "CiACAQAmAQRkYXRhMRhAAAQogABnMRtBAEaCAgQQGcZoBFhSTLU2GgCOAgAfAAIjQzEZFEQxGESIADhJFRZXBgJMUIAEFR98dUxQsCJDMRkURDEYRDYaAVcCAIgADSJDMRlA/8oxGBREIkOKAQAoi/9niSMoZUSJ",
            "clear": "CoEBQw=="
        },
        "compilerInfo": {
            "compiler": "puya",
            "compilerVersion": {
                "major": 4,
                "minor": 7,
                "patch": 0
            }
        },
        "events": [],
        "templateVariables": {}
    };
    const account = algosdk.mnemonicToSecretKey(mnemonic);
    const appId = 746498651;
    const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
    const algorand = AlgorandClient.testNet();
    algorand.account.setSigner(account.addr, algosdk.makeBasicAccountTransactionSigner(account));
    const abiInterface = new algosdk.ABIInterface(arc56Contract);
    const method = abiInterface.getMethodByName('writeData');
    const sp = await algod.getTransactionParams().do();
    const txn = algosdk.makeApplicationNoOpTxnFromObject({
        sender: account.addr.toString(),
        appIndex: appId,
        appArgs: [
            method.getSelector(),
            new TextEncoder().encode(`  ${value}`)
        ],
        suggestedParams: sp,
    });
    const signedTxn = txn.signTxn(account.sk);
    const result = await algod.sendRawTransaction(signedTxn).do();
    await saveTransaction(account.addr.toString(), "transaction", result.txid);
    return result.txid;
};
export default writeVault;
//# sourceMappingURL=write-vault.js.map