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
		alias: {
			'src': path.resolve(__dirname, 'src')
		}
	},
	entry: './index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		publicPath: '/dist',
		// contentBase: path.resolve(__dirname, 'dist'),
		// contentBasePublicPath
	}
};

export default config;
