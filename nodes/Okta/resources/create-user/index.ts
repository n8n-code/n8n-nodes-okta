import type { INodeProperties } from 'n8n-workflow';

export const createUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Create User"
					]
				}
			},
			"options": [
				{
					"name": "Create User In Group",
					"value": "Create User In Group",
					"action": "Create User in Group",
					"description": "Create User in Group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Create User"
					],
					"operation": [
						"Create User In Group"
					]
				}
			}
		},
		{
			"displayName": "Activate",
			"name": "activate",
			"default": "false",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "activate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create User"
					],
					"operation": [
						"Create User In Group"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  \"{{groupId}}\"\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create User"
					],
					"operation": [
						"Create User In Group"
					]
				}
			}
		},
		{
			"displayName": "Profile",
			"name": "profile",
			"type": "json",
			"default": "{\n  \"email\": \"isaac@{{email-suffix}}\",\n  \"firstName\": \"Isaac\",\n  \"lastName\": \"Brock\",\n  \"login\": \"isaac@{{email-suffix}}\"\n}",
			"routing": {
				"send": {
					"property": "profile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Create User"
					],
					"operation": [
						"Create User In Group"
					]
				}
			}
		},
];
