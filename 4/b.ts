import { promises as fs } from "fs"

export async function main() {
  const input = await fs.readFile("4/input.txt", "utf8")

  const pairs = input.trim().split("\n")

  const overlappingPairs = pairs.reduce((acc, pair) => {
    const [firstSection, secondSection] = pair.split(",")

    const [firstSectionStart, firstSectionEnd] = firstSection
      .split("-")
      .map(Number)
    const [secondSectionStart, secondSectionEnd] = secondSection
      .split("-")
      .map(Number)

    // check if any of sections overlaps
    const firstSectionOverlapsSecondSection =
      firstSectionStart <= secondSectionStart &&
      firstSectionEnd >= secondSectionStart
    const secondSectionOverlapsFirstSection =
      secondSectionStart <= firstSectionStart &&
      secondSectionEnd >= firstSectionStart

    if (
      firstSectionOverlapsSecondSection ||
      secondSectionOverlapsFirstSection
    ) {
      acc.push(pair)
    }

    return acc
  }, [] as string[])

  console.log(overlappingPairs.length)
}

main()
