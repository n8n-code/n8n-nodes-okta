import type { INodeProperties } from 'n8n-workflow';

export const lifecycleOperationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					]
				}
			},
			"options": [
				{
					"name": "Activate User",
					"value": "Activate User",
					"action": "Activate User",
					"description": "Activate User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/activate"
						}
					}
				},
				{
					"name": "Deactivate User",
					"value": "Deactivate User",
					"action": "Deactivate User",
					"description": "Deactivate User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/deactivate"
						}
					}
				},
				{
					"name": "Set Temp Password",
					"value": "Set Temp Password",
					"action": "Set Temp Password",
					"description": "Set Temp Password",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/expire_password"
						}
					}
				},
				{
					"name": "Reset Password",
					"value": "Reset Password",
					"action": "Reset Password",
					"description": "Reset Password",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/reset_password"
						}
					}
				},
				{
					"name": "Suspend User",
					"value": "Suspend User",
					"action": "Suspend User",
					"description": "Suspend User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/suspend"
						}
					}
				},
				{
					"name": "Unlock User",
					"value": "Unlock User",
					"action": "Unlock User",
					"description": "Unlock User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/unlock"
						}
					}
				},
				{
					"name": "Unsuspend User",
					"value": "Unsuspend User",
					"action": "Unsuspend User",
					"description": "Unsuspend User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/unsuspend"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Activate User"
					]
				}
			}
		},
		{
			"displayName": "Send Email",
			"name": "sendEmail",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sendEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Activate User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/activate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Activate User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/deactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Deactivate User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/deactivate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Deactivate User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/expire_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Set Temp Password"
					]
				}
			}
		},
		{
			"displayName": "Temp Password",
			"name": "tempPassword",
			"default": "true",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tempPassword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Set Temp Password"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/expire_password<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Set Temp Password"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/reset_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Reset Password"
					]
				}
			}
		},
		{
			"displayName": "Send Email",
			"name": "sendEmail",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sendEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Reset Password"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/reset_password<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Reset Password"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/suspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Suspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/suspend<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Suspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/unlock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Unlock User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/unlock<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Unlock User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/unsuspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Unsuspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/unsuspend<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lifecycle Operations"
					],
					"operation": [
						"Unsuspend User"
					]
				}
			}
		},
];
