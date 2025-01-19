# Equilibrium Calculations in Aspen Plus

Welcome to the Equilibrium Calculations guide! This guide will help you calculate the equilibrium of a reaction system and perform sensitivity analysis in Aspen Plus.

> **Note:** The Rgibbs reactor performs equilibrium calculations by minimizing the Gibbs free energy of the system. This approach ensures accurate reaction calculations based on thermodynamic principles.

## Properties Environment Setup

### Component Selection
Add all required components to your simulation environment.
![Component selection](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled.png)

### Method Selection
Select **PR-BM** (Peng Robinson with Boston-Mathias alpha function) as your property method. This method is chosen because:
- It's suitable for high-pressure simulations (60 bars in this case)
- It works well with hydrocarbons and light gas mixtures
- It handles both hydrocarbons and light gases like CO2 effectively

![Method selection](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 1.png)

### Property Analysis
Run the property system analysis to verify your setup.
![Property analysis](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 2.png)

## Simulation Environment Setup

### Rgibbs Reactor Setup
Add the Rgibbs reactor from the reactor tab and connect your material streams.
![Rgibbs reactor setup](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 3.png)

### Inlet Stream Configuration
Define the inlet conditions and composition flow for your streams.
![Inlet configuration](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 4.png)

### Reactor Operating Conditions
Set the operating conditions for your Rgibbs reactor.
![Operating conditions](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 5.png)

### Product Configuration
Configure the products section:
- Select the first option to consider all components as products
- If excluding CO2, use "Identify possible products"

![Product configuration](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 6.png)

## Sensitivity Analysis

### Model Analysis Setup
Access the model analysis tool to create your sensitivity analysis.
![Model analysis](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 7.png)
![New variable setup](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 8.png)

### Variable Definition
Define the variables for your analysis:
- Add COin and COout for conversion calculations
- Include hydrocarbon fractions to track temperature effects

![Variable definition](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 9.png)
![CO variables](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 10.png)
![Hydrocarbon fractions](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 11.png)

### Results Configuration
Set up the tabulation for your results:
- Define conversion calculation expressions
- Add columns for hydrocarbon production changes

![Results configuration](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 12.png)

## Results Analysis

### With CO2
View and analyze the results including CO2 in the system.
![Results with CO2](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 15.png)

### Without CO2
For analysis without CO2:
- Modify Gibbs reactor products to exclude CO2
- Include reactants as products to handle unreacted materials
- Rerun the sensitivity analysis

![Products without CO2](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 16.png)
![Results without CO2](../../../che273_guide/Equilibrium calcs/How to do Equilibrium calculations in Aspen Plus/Untitled 17.png) 