import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tudwgmb3'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'


export default defineConfig({
  name: 'ProWrites',
  title: 'ProWrites',
  projectId, 
  dataset,
  basePath: '/studio', 
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})