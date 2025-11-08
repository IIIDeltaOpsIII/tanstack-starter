import { LANGUAGES } from '@/constants/lang.constants'

type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES]

export type { Language }
