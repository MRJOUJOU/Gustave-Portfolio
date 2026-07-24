// Computes elapsed experience from a start date, so the displayed
// number never goes stale or overstates reality as time passes.
export function getExperience(startDateStr) {
  const start = new Date(startDateStr);
  const now = new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);

  if (months < 12) {
    return { value: months, unit: "months" };
  }
  return { value: Math.floor(months / 12), unit: "years" };
}
