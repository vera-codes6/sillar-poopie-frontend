declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

declare module '*.wav' {
  const content: string
  export default content
}
