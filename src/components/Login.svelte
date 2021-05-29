<script lang="ts">
  import { client } from '../client';
  import LocalStorageUtil from '../localstorage';
  import { masterKey, apiKey } from '../store';

  let selected = 0;

  let username = '';
  let key = '';
  let remember = false;

  async function onLogin() {
    const res = await client.exchangeAPIToken(username, key);
    apiKey.set(res.token);
    if (remember) LocalStorageUtil.set('apikey', res.token);
  }

  async function onRegister() {
    const res = await client.createAccount(username);
    key = res.masterkey;
    masterKey.set(res.masterkey);
    await onLogin();
  }
</script>

<main>
  <div class="wrapper">
    <div class="container">
      <div class="head">
        <span class:active={selected === 0} on:click={() => (selected = 0)}
          >REGISTER</span
        >
        <span class:active={selected === 1} on:click={() => (selected = 1)}
          >LOGIN</span
        >
      </div>
      <div class="body">
        {#if selected === 0}
          <label for="username">Username</label>
          <input id="username" bind:value={username} autocomplete="off" />
          <button disabled={!username} on:click={() => onRegister()}
            >REGISTER</button
          >
        {:else}
          <label for="username">Username</label>
          <input id="username" bind:value={username} autocomplete="off" />
          <label for="masterkey">Master Key</label>
          <input id="masterkey" type="password" bind:value={key} />
          <input id="cb-save-creds" type="checkbox" bind:checked={remember} />
          <label for="cb-save-creds">Store Credentials</label>
          <button disabled={!username || !key} on:click={() => onLogin()}
            >LOGIN</button
          >
        {/if}
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  input,
  label,
  button {
    display: block;
    width: 100%;
  }

  input {
    margin-bottom: 20px;
  }

  label[for^='cb'],
  input[type='checkbox'] {
    display: inline;
    width: fit-content;
  }

  label {
    margin-bottom: 10px;
  }

  .wrapper {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .container {
      margin: 20vh auto auto auto;
      width: 90vw;
      max-width: 400px;
      border-radius: 10px;
      overflow: hidden;
      background-color: #001419;
      box-shadow: 0px 15px 40px 0 rgba(black, 0.5);

      .head {
        display: flex;
        background-color: darken(#001419, 1);

        > span {
          padding: 20px 0;
          text-align: center;
          width: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            background-color: rgba(#03a9f4, 0.2);
          }

          &.active {
            background-color: #03a9f4;
          }
        }
      }

      .body {
        padding: 20px;
      }
    }
  }
</style>
