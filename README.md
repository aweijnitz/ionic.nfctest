# ionic.nfctest - an Ionic tehnology exploration

# Setup

## Required software

### Node v0.12
More recent versions of Node.js will not work. For most convenience, install Node Version Manager first, then use it to install node v0.12.8.
See: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps

### Android SDK and/or XCode
You need these to preview your apps.

### Ionic

```npm install -g cordova ionic```

```sudo npm -g install ios-sim```

See: http://ionicframework.com/getting-started/


### Bower (to be able to add JS plugins)

```npm install -g bower```

Use 

```ionic add <bower plugin name>```


## Clone this repo and install

### Download and install all plugins

```ionic state reset```



## Running

### Run in browser (live reload)

```ionic serve```

### Run on connected android device

```ionic run android```

Debug connected device using Chrome on your computer
chrome://inspect/#devices

### In emulator

```ionic emulate android```

```ionic emulate ios```


## Share with testers
```ionic upload``` 

```ionic share EMAIL```


See: http://blog.ionic.io/invite-a-friend/

See: http://ionicframework.com/docs/cli/uploading_viewing.html


## Build for release 
See: http://ionicframework.com/docs/guide/publishing.html
