import vine from '@vinejs/vine'

export const loginUserValidator = vine.compile(
  vine.object({
    full_name: vine.string(),
    email: vine.string(),
    password: vine.string(),
  })
)
