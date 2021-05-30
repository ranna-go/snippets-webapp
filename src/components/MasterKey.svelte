<script lang="ts">
  import { masterKey } from '../store';
  import { copyToClipboard } from '../util';
</script>

<main>
  {#if $masterKey}
    <div class="masterkey">
      <div class="header">
        <h3>Master Key</h3>
        <button on:click={() => masterKey.set('')}>❌</button>
      </div>
      <p>
        You will need this master key to login later. Please store it somewhere
        save!<br />
        <strong>This token will not be shown again later!</strong>
      </p>
      <div class="keybox">
        <input type="password" readonly value={$masterKey} />
        <button on:click={() => copyToClipboard($masterKey)}>📋</button>
      </div>
    </div>
  {/if}
</main>

<style lang="scss">
  @import '../styles/mixins.scss';

  .masterkey {
    padding: 10px 15px;
    background-color: #ed4245;
    border-radius: 10px;
    margin-bottom: 30px;
    @include shadow;

    > .header {
      display: flex;
      justify-content: space-between;
    }

    > .keybox {
      display: flex;
      white-space: nowrap;

      > input {
        width: 100%;
        margin-right: 15px;
      }
    }
  }
</style>
