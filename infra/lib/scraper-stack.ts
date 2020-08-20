import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class ScraperStack extends cdk.Stack {
	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const dependencies_layer = new lambda.LayerVersion(this, 'dependencies-layer', {
			code: new lambda.AssetCode('../src/dependencies/build'),
			compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
			description: 'Dependecies handlers',
		})

		const scraper_lambda = new lambda.Function(this, 'scraper-function', {
			code: new lambda.AssetCode('../src/get_currency_exchange', {
				exclude: ['{/.venv/**,/venv/**,/.env/**},**/*~']
			}),
			handler: 'app.lambda_handler',
			runtime: lambda.Runtime.PYTHON_3_7,
			environment: {
				KEY: 'VALUE'
			},
			timeout: cdk.Duration.minutes(10),
			layers: [dependencies_layer],
		})
	}
}
