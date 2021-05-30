<script lang="ts">
  import { apiKey } from '../store';
  import { copyToClipboard } from '../util';
</script>

<main>
  <div class="apikey">
    <h3>API Key</h3>
    <p>
      You will need this master key to login later. Please store it somewhere
      save!<br />
      <strong>This token will not be shown again later!</strong>
    </p>
    <div class="keybox">
      <input type="password" readonly value={$apiKey} />
      <button on:click={() => copyToClipboard($apiKey)}>📋</button>
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
