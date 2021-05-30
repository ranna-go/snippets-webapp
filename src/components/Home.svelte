<script lang="ts">
  import { client } from '../client';
  import Snippet from '../components/Snippet.svelte';
  import type { Snippet as SnippetModel } from '@ranna-go/ranna-ts';

  import ApiKey from './ApiKey.svelte';
  import MasterKey from './MasterKey.svelte';

  let linksPromise: Promise<SnippetModel[]>;

  fetchSnippets();

  function fetchSnippets() {
    linksPromise = client.list();
  }

  async function onDelete(s: SnippetModel) {
    await client.delete(s.ident);
    fetchSnippets();
  }

  function onSnippetClick(s: SnippetModel) {
    window.open(`${process.env.rannaAppLocation}?s=${s.ident}`);
  }
</script>

<main>
  <div class="content-wrapper">
    <MasterKey />
    <ApiKey />
    {#if linksPromise}
      {#await linksPromise}
        <p>Fetching snippets ...</p>
      {:then snippets}
        <div class="snippets-container">
          {#each snippets as snippet}
            <Snippet
              {snippet}
              on:delete={() => onDelete(snippet)}
              on:click={() => onSnippetClick(snippet)}
            />
          {/each}
        </div>
      {/await}
    {/if}
  </div>
</main>

<style lang="scss">
  .snippets-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
</style>
