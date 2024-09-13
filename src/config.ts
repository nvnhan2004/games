import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  // NEXT_PUBLIC_URL: z.string()
})
console.log(process);

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
  // NEXT_PUBLIC_API_ENDPOINT: "https://localhost:7196/api/",
  // NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
})
if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

const envConfig = configProject.data
export default envConfig
