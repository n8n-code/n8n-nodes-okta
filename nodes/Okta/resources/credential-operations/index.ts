import type { INodeProperties } from 'n8n-workflow';

export const credentialOperationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					]
				}
			},
			"options": [
				{
					"name": "Set Recovery Credential",
					"value": "Set Recovery Credential",
					"action": "Set Recovery Credential",
					"description": "Set Recovery Credential",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Change Password",
					"value": "Change Password",
					"action": "Change Password",
					"description": "Change Password",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/credentials/change_password"
						}
					}
				},
				{
					"name": "Change Recovery Question",
					"value": "Change Recovery Question",
					"action": "Change Recovery Question",
					"description": "Change Recovery Question",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/credentials/change_recovery_question"
						}
					}
				},
				{
					"name": "Forgot Password One Time Code",
					"value": "Forgot Password One Time Code",
					"action": "Forgot Password (One Time Code)",
					"description": "Forgot Password (One Time Code)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/credentials/forgot_password"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /api/v1/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Set Recovery Credential"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "{\n  \"recovery_question\": {\n    \"answer\": \"Annie Oakley\",\n    \"question\": \"Who's a major player in the cowboy scene?\"\n  }\n}",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Set Recovery Credential"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/credentials/change_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Password"
					]
				}
			}
		},
		{
			"displayName": "New Password",
			"name": "newPassword",
			"type": "json",
			"default": "{\n  \"value\": \"uTVM,TPw55\"\n}",
			"routing": {
				"send": {
					"property": "newPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Password"
					]
				}
			}
		},
		{
			"displayName": "Old Password",
			"name": "oldPassword",
			"type": "json",
			"default": "{\n  \"value\": \"{{password}}\"\n}",
			"routing": {
				"send": {
					"property": "oldPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Password"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/credentials/change_recovery_question",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Recovery Question"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "json",
			"default": "{\n  \"value\": \"{{password}}\"\n}",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Recovery Question"
					]
				}
			}
		},
		{
			"displayName": "Recovery Question",
			"name": "recovery_question",
			"type": "json",
			"default": "{\n  \"answer\": \"My recovery credentials are updated\",\n  \"question\": \"What happens when I update my question\"\n}",
			"routing": {
				"send": {
					"property": "recovery_question",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Change Recovery Question"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/credentials/forgot_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Forgot Password One Time Code"
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
						"Credential Operations"
					],
					"operation": [
						"Forgot Password One Time Code"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/credentials/forgot_password<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credential Operations"
					],
					"operation": [
						"Forgot Password One Time Code"
					]
				}
			}
		},
];
