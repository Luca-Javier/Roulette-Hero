const getEnemyWheelConfig = ({ enemy }) => {
  const wheelConfig = {
    data: [],
    config: {
      hidden: false,
      width: 110,
      height: 110,
      left: 120,
      top: 99,
      pointerHeight: 50,
    },
  }

  return {
    wheelConfig,
    possibleAttacks: {},
  }
}

export default getEnemyWheelConfig
