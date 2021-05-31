<script lang="ts">
  import { client } from '../client';

  import { apiKey } from '../store';
  import { copyToClipboard } from '../util';
</script>

<main>
  <div class="apikey">
    <div class="header">
      <h3>API Key</h3>
      <button title="Logout" on:click={() => client.logout()}>🚪</button>
    </div>
    <p>
      This key is used to link newly created snippets to your account and also
      to list and delete created snippets.<br />
      You need to input this key in the ranna app settings to link created snippets
      to this account.
    </p>
    <div class="keybox">
      <input type="password" readonly value={$apiKey} />
      <button
        title="Copy to clipboard"
        on:click={() => copyToClipboard($apiKey)}>📋</button
      >
    </div>
  </div>
</main>

<style lang="scss">
  @import '../styles/mixins.scss';

  .apikey {
    padding: 10px 15px;
    background-color: #001419;
    border-radius: 10px;
    margin-bottom: 30px;
    @include shadow;

    h3 {
      margin: 0;
    }

    > .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
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
