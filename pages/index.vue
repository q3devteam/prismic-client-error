<template>
  <h1>Doc 1:</h1>
  <pre>{{ asyncData1.data }}</pre>

  <h1>Doc 2:</h1>
  <pre>{{ asyncData2.data }}</pre>
</template>

<script setup>
import * as prismic from '@prismicio/client'

const { client: client1 } = usePrismic()
const { data: asyncData1 } = useAsyncData('1', () => {
  return client1.getSingle('home_page')
})

const client2 = prismic.createClient('https://qdlagency.cdn.prismic.io/api/v2')
const { data: asyncData2 } = useAsyncData('2', () => {
  return client2.getSingle('home_page')
})
</script>
