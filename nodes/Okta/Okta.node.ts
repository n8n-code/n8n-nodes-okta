import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { createUserDescription } from './resources/create-user';
import { credentialOperationsDescription } from './resources/credential-operations';
import { lifecycleOperationsDescription } from './resources/lifecycle-operations';
import { defaultDescription } from './resources/default';

export class Okta implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Okta',
		name: 'N8nDevOkta',
		icon: { light: 'file:./okta.svg', dark: 'file:./okta.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Okta User API provides operations to manage users in your organization',
		defaults: { name: 'Okta' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOktaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Create User",
					"value": "Create User",
					"description": ""
				},
				{
					"name": "Credential Operations",
					"value": "Credential Operations",
					"description": ""
				},
				{
					"name": "Lifecycle Operations",
					"value": "Lifecycle Operations",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...createUserDescription,
		...credentialOperationsDescription,
		...lifecycleOperationsDescription,
		...defaultDescription
		],
	};
}
