import * as matchers from 'vitest-dom/matchers'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

expect.extend(matchers)

// vitest-setup.ts
import 'vitest-dom/extend-expect'

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
