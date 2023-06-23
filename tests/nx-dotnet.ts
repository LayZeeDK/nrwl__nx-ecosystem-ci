import { RunOptions } from '../types'
import { runInRepo } from '../utils'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'nx-dotnet/nx-dotnet',
		branch: 'master',
		build: ['nx-ecosystem-ci:build'],
		test: ['nx-ecosystem-ci:test'],
		e2e: ['nx-ecosystem-ci:e2e'],
	})
}
