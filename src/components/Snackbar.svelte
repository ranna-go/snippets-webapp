<script lang="ts">
  import { snackbarStore } from '../snackbarService';

  function getEmote(type: string) {
    switch (type) {
      case 'info':
        return 'ℹ';
      case 'success':
        return '✔';
      case 'error':
        return '❌';
      default:
        return '';
    }
  }
</script>

<main>
  <div class="container {$snackbarStore.show ? 'show' : ''}">
    <div class="snackbar {$snackbarStore?.type}">
      <span>{getEmote($snackbarStore?.type)}</span>
      <span>{$snackbarStore?.message}</span>
    </div>
  </div>
</main>

<style lang="scss">
  @import '../styles/mixins.scss';

  .container {
    display: flex;
    position: fixed;
    bottom: -20px;
    opacity: 0;
    left: 0px;
    width: 100vw;
    pointer-events: none;
    justify-content: center;
    transition: all 0.2s ease;

    &.show {
      bottom: 20px;
      opacity: 1;
    }

    .snackbar {
      padding: 10px 15px;
      border-radius: 10px;
      pointer-events: all;
      @include shadow;

      span:first-child {
        margin-right: 10px;
      }
    }

    .info {
      background-color: #5865f2;
    }

    .success {
      background-color: #41b967;
    }

    .error {
      background-color: #ed4245;
    }
  }
</style>
