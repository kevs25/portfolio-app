import path from "path"
import fs from 'fs'
import matter from "gray-matter"

export type Resume = {
  metaData: ResumeMetadata,
  content : string
}

export type ResumeMetadata = {
  name?: string,
  designation?: string,
  phone?: string,
  address?: string,
  linkedIn?: string,
  gitHub?: string
}

const rootDirectory = path.join(process.cwd(), 'content', 'resume')

export async function getResume() {
  console.log("dir",rootDirectory)
  const filePath = path.join(rootDirectory, 'my-resume-mdx.mdx')
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data, content } = matter(fileContent) 
  return { metaData: data, content }
}