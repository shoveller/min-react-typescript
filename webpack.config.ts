import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
	}
};

export default config;
