import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'ProWrites',
  title: 'ProWrites',
  projectId: 'tudwgmb3', 
  dataset: 'production',
  basePath: '/studio', 
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})