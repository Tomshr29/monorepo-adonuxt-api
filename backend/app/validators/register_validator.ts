import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    full_name: vine.string(),
    email: vine.string().unique(async (db, value) => {
      const user = await db.from('users').where('email', value).first()
      return !user
    }),
    password: vine.string(),
  })
)
