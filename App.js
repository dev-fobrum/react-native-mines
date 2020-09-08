import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Alert
} from 'react-native'

import params from './src/params'
import {
  createdMineBoard,
  cloneBoard,
  hadExplosion,
  openField,
  showMines,
  wonGame,
  invertFlag,
  flagsUsed
} from './src/functions'

import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import Rules from './src/screens/Rules'
import MineField from './src/components/MineField'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createdMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
      showRules: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)

    openField(board, row, column)

    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Sorry, you lost!', ':(')
    }

    if (won) {
      Alert.alert('Congratulations!', 'You won :)')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Congratulations!', 'You won :)')
    }

    this.setState({ board, won })
  }

  onLevelSelected = (level) => {
    params.difficultLevel = level

    this.setState(this.createState())
  }

  closeLevelSelection = () => {
    this.setState({ showLevelSelection: false })
  }

  closeRules = () => {
    this.setState({ showRules: false })
  }

  getColorLevel = () => {
    let color = ''

    switch (params.difficultLevel) {
      case 0.1:
        color = '#49B65D'
        break
      case 0.2:
        color = '#2765F7'
        break
      case 0.3:
        color = '#F26337'
        break
    }

    return color
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>

          <LevelSelection
            isVisible={this.state.showLevelSelection}
            onLevelSelected={this.onLevelSelected}
            onCancel={() => this.setState({ showLevelSelection: false })}
            onClose={() => this.closeLevelSelection()}
          />

          <Rules
            isVisible={this.state.showRules}
            onCancel={() => this.setState({ showRules: false })}
            onClose={() => this.closeRules()}
          />

          <Header
            levelColor={this.getColorLevel()}
            flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())}
            onLevelSelection={() => this.setState({ showLevelSelection: true })}
            onRules={() => this.setState({ showRules: true })}
          />

          <View style={styles.board}>
            <MineField
              board={this.state.board}
              onOpenField={this.onOpenField}
              onSelect={this.onSelectField}
            />
          </View>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
})

export default App
