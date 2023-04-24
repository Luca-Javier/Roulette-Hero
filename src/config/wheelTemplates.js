/**
 * @file Contains the predefined wheel configs to generate the wheel
 */

export const WHEEL_TEMPLATE_BEGINNING = {
  data: [{ option: "Play" }, { option: "Character" }, { option: "Options" }],
  config: { hidden: true },
}

export const WHEEL_TAMPLATE_CRIT = critickProb => ({
  data: [
    { option: "Critico", optionSize: critickProb },
    { option: "Normal", optionSize: 100 - critickProb },
  ],
})
