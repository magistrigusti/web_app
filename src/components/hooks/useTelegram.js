  const telWebApp = window.Telegram.WebApp;

  export function useTelegram() {
    const onClose = () => {
      telWebApp.close();
    };

    const onToggleButton = () => {
      if(telWebApp.MainButton.isVisible) {
        telWebApp.MainButton.hide();
      } else {
        telWebApp.MainButton.show();
      }
    };

    return {
      onClose,
      onToggleButton,
      telWebApp,
      user: telWebApp.initDataUnsafe?.user,
    }
  }