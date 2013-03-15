# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="robbyrussell"

# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# Set to this to use case-sensitive completion
# CASE_SENSITIVE="true"

# Comment this out to disable bi-weekly auto-update checks
# DISABLE_AUTO_UPDATE="true"

# Uncomment to change how many often would you like to wait before auto-updates occur? (in days)
# export UPDATE_ZSH_DAYS=13

# Uncomment following line if you want to disable colors in ls
# DISABLE_LS_COLORS="true"

# Uncomment following line if you want to disable autosetting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment following line if you want red dots to be displayed while waiting for completion
# COMPLETION_WAITING_DOTS="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
plugins=(git brew cloudapp gem git-extras git heroku node npm osx pip rails3 rbenv redis-cli sublime)

source $ZSH/oh-my-zsh.sh

# Customize to your needs...
export PATH=/opt/boxen/nvm/v0.8.8/bin:bin:/opt/boxen/rbenv/shims:/opt/boxen/rbenv/bin:/opt/boxen/rbenv/plugins/ruby-build/bin:/opt/boxen/homebrew/share/python:node_modules/.bin:/opt/boxen/bin:/opt/boxen/homebrew/bin:/opt/boxen/homebrew/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/git/bin

export EDITOR=st

source /opt/boxen/env.sh
source /opt/boxen/nvm/nvm.sh

nvm use 0.8
