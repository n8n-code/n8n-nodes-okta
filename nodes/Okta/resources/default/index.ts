import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Find User",
					"value": "Find User",
					"action": "Find User",
					"description": "Find User",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users"
						}
					}
				},
				{
					"name": "Get Current User",
					"value": "Get Current User",
					"action": "Get Current User",
					"description": "Get Current User",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users/me"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get User",
					"description": "Get User",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get Assigned App Links",
					"value": "Get Assigned App Links",
					"action": "Get Assigned App Links",
					"description": "Get Assigned App Links",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/appLinks"
						}
					}
				},
				{
					"name": "Get Groups For User",
					"value": "Get Groups For User",
					"action": "Get Groups for User",
					"description": "Get Groups for User",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/groups"
						}
					}
				},
				{
					"name": "Reset Factors",
					"value": "Reset Factors",
					"action": "Reset Factors",
					"description": "Reset Factors",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/lifecycle/reset_factors"
						}
					}
				},
				{
					"name": "Clear User Sessions",
					"value": "Clear User Sessions",
					"action": "Clear User Sessions",
					"description": "Clear User Sessions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/users/{{$parameter[\"userId\"]}}/sessions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find User"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"default": "user",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Find User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/me<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}/appLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Assigned App Links"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}/appLinks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Assigned App Links"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Groups For User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{userId}/groups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Groups For User"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/reset_factors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Factors"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/users/{userId}/lifecycle/reset_factors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Factors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/users/{userId}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Clear User Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/users/{userId}/sessions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Clear User Sessions"
					]
				}
			}
		},
];
