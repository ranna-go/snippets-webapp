<script lang="ts">
  import type { Snippet } from '@ranna-go/ranna-ts';
  import { createEventDispatcher } from 'svelte';
  import { languageColor } from '../colors';
  import dateformat from 'dateformat';

  export let snippet: Snippet;
  let displayname = snippet.displayname ?? snippet.ident;

  const dispatch = createEventDispatcher();

  function onDelete(e: Event) {
    e.stopPropagation();
    dispatch('delete');
  }

  function onClick() {
    dispatch('click');
  }

  function onInputClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  async function updateTitle() {
    if (!displayname) {
      displayname = snippet.ident;
      return;
    }
    dispatch('update', displayname);
  }
</script>

<main>
  <div class="container" on:click={onClick}>
    <button class="btn-delete" on:click={onDelete}>🗑</button>
    <input
      class="i-ident"
      bind:value={displayname}
      on:click={onInputClick}
      on:blur={updateTitle}
    />
    <p class="language">
      <span
        style={`background-color: ${languageColor(snippet.language)}`}
      />{snippet.language}
    </p>
    <p class="smol">{dateformat(snippet.timestamp)}</p>
    <p class="smol">{snippet.id}</p>
  </div>
</main>

<style lang="scss">
  @import '../styles/mixins.scss';

  .container {
    background-color: #001419;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    max-width: 1100px / 3 - 20px * 3;
    width: calc(100vw / 3 - 20px * 3);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      @include shadow;
      transform: scale(1.03);

      .btn-delete {
        opacity: 1;
        pointer-events: all;
      }
    }

    @media (max-width: 900px) {
      min-width: calc(100% - 20px);
    }

    h3 {
      margin-bottom: 5px;
    }

    p {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0px;
      }
    }

    .btn-delete {
      position: absolute;
      top: 10px;
      right: 10px;
      opacity: 0;
      pointer-events: none;
      background-color: #ed4245;

      &:hover {
        background-color: darken(#ed4245, 15);
      }
    }

    .language {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      > span {
        height: 1em;
        width: 1em;
        border-radius: 100%;
        margin-right: 10px;
      }
    }

    .smol {
      font-size: 12px;
      opacity: 0.5;
      margin-bottom: 0px;
    }

    .i-ident {
      background-color: transparent;
      padding: 0;
      font-size: 1.3em;
    }
  }
</style>
