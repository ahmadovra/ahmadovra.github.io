# Toluene HDA Process Simulation Guide

Welcome to Toluene Hydrodealkylation guide! This guide will help you simulate the Toluene Hydrodealkylation process in HYSYS, including the conversion of toluene to benzene. You will learn about the flowsheet and equipment data, and how to use shortcut distillation columns to build T-101 and T-102.

## Problem Statement

This process simulation is about **Toluene Dehyroalkylation (HDA)**. The toluene dehydroalkylation process involves the conversion of toluene to benzene and methane, benzene being the desired product. However, another side reaction occurs which is conversion of benzene to biphenyl. The primary reaction operates at 98% conversion and the side reaction is at 2% conversion.

### Reactions
```
C₇H₈ + H₂ → C₆H₆ + CH₄
2C₆H₆ → C₁₂H₁₀ + H₂
```

## Flowsheet
![Process Flowsheet](../../../assets/che273_guide_imgs/Toluene HDA/Untitled.png)

## Properties Environment Setup

### Component Selection
Open new project and add the components from problem statement.
![Component selection](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 1.png)

### Reaction Setup
Add reactions to your process system.
![Reaction setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 2.png)
![Reaction set configuration](../../../assets/che273_guide_imgs/Toluene HDA/rxn_set.png)
![Reaction conversion](../../../assets/che273_guide_imgs/Toluene HDA/rxn_conversion.png)

### Configure First Reaction
After adding first reaction (toluene to benzene), specify the conversion (98%) and stoichiometry.
![First reaction configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 3.png)

### Configure Second Reaction
Verify the second reaction configuration.
![Second reaction configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 4.png)

### Reaction Ranking
Define the Ranking of reactions and attach reaction set to fluid package.
![Reaction ranking](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 5.png)
![Reaction order setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 6.png)

## Simulation Environment

### Initial Stream Setup
Add first two streams to flowsheet and define their composition and conditions:
![Initial streams](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 7.png)

#### Stream Conditions

| Streams | T [°C] | P [kPa] |
|---------|--------|---------|
| 1       | 25     | 190     |
| 2       | 25     | 2550    |

#### Stream Compositions

| Compounds | S1 [kmol/hr] | S2 [kmol/hr] |
|-----------|--------------|--------------|
| Hydrogen  | 0           | 286          |
| Methane   | 0           | 15           |
| Benzene   | 0           | 0            |
| Toluene   | 108.7       | 0            |
| Biphenyl  | 0           | 0            |
| N2        | 0           | 0            |
| O2        | 0           | 0            |
| H2O       | 0           | 0            |
| CO2       | 0           | 0            |
| CO        | 0           | 0            |

### Separator Installation
Install separator for toluene inlet to ensure no gas enters the pump.
![Separator installation](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 8.png)

### Pump Configuration
Add pump and set outlet pressure to 25.80 bars.
![Pump setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 9.png)
![Pump pressure configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 10.png)

### Mixer Setup
Add two mixers (tees/joints). Note: Do not add recycle streams yet.
![Mixer setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 11.png)

### Pre-heater Configuration
Add pre-heater to heat the mix to 225°C. Set ΔP = 30 kPa.
![Pre-heater setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 12.png)

### Furnace Setup
Add fired heater and configure the radiative zone. Define air, fuel, and flue gas streams.
![Furnace setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 13.png)
![Furnace efficiency settings](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 14.png)

#### Air and Fuel Compositions

| Compounds | Air   | Fuel |
|-----------|-------|------|
| Hydrogen  | 0     | 0.2  |
| Methane   | 0     | 0.8  |
| N2        | 0.79  | 0    |
| O2        | 0.21  | 0    |

#### Stream Conditions

| Streams | T [°C] | P [kPa] |
|---------|--------|---------|
| Air     | 25     | 101.3   |
| Fuel    | 25     | 101.3   |

### Reactor Configuration
Add conversion reactor and select the reaction set.
![Reactor setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 16.png)
![Reactor reaction set](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 17.png)

### Cooler Setup
Add cooler E-101. Set pressure drop to 30 kPa and temperature to 38°C.
![Cooler setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 18.png)

### Recycle Configuration
Add separator V-101 and tee for recycle stream (98% of separator outlet gas).
![Recycle setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 19.png)

### Compressor Setup
Add compressor to increase gas pressure to 25.50 bars.
![Compressor setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 20.png)
![Compressor pressure settings](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 21.png)

### Final Recycle Setup
Add valve VLV-100 (ΔP = 10 kPa) and configure the final recycle streams.
![Valve setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 22.png)
![Final recycle configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 23.png)

### Distillation Setup
Add valve VLV-101 (throttle to 320 kPa) and separator V-102.
![Distillation initial setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 26.png)

Configure the shortcut column for initial estimates:
![Shortcut column](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 28.png)
![Column configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 29.png)

### Final Column Configuration
Use the shortcut column results to configure the rigorous distillation column:
![Final column setup](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 35.png)
![Column parameters](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 36.png)

Set condenser and reboiler pressures to 250 kPa and 280 kPa respectively.
![Pressure settings](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 38.png)
![Temperature settings](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 39.png)
![Final configuration](../../../assets/che273_guide_imgs/Toluene HDA/Untitled 40.png) 