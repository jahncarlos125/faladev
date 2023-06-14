import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/jahncarlos125/f48f42cbcbe02ee017bd10958a280e0f/raw/a2b5488242e583b1d91f8e356b21c050c35ce980/settings.json" />
}