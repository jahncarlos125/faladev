import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Extensions() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/jahncarlos125/f48f42cbcbe02ee017bd10958a280e0f/raw/a2b5488242e583b1d91f8e356b21c050c35ce980/extensions.json" />
}