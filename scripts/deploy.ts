import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const ShapeAreaCalculator = await ethers.getContractFactory("ShapeAreaCalculator");

  // Deploy the contract
  const shapeAreaCalculator = await ShapeAreaCalculator.deploy();

  // Wait for deployment to complete
  await shapeAreaCalculator.waitForDeployment();

  // Log the contract address
  console.log("ShapeAreaCalculator deployed to:", shapeAreaCalculator.target);
}

// Main function execution
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
