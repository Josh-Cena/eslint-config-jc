const { builtinRules } = require("eslint/use-at-your-own-risk");
const config = require("../rules/base");

for (const ruleId of Object.keys(config.rules)) {
  if (!builtinRules.has(ruleId))
    console.error(`Rule "${ruleId}" is not a built-in rule`);
}

for (const [ruleId, rule] of builtinRules) {
  if (rule.meta.deprecated) {
    if (Object.hasOwn(config.rules, ruleId))
      console.error(`Rule "${ruleId}" is deprecated`);
  } else if (rule.meta.type === "layout") {
    if (Object.hasOwn(config.rules, ruleId))
      console.error(`Rule "${ruleId}" is layout`);
  } else if (!Object.hasOwn(config.rules, ruleId)) {
    console.error(`Rule "${ruleId}" is not configured`);
  } else {
    const { schema } = rule.meta;
    const ruleConfig = config.rules[ruleId];
    if (ruleConfig === "off" || ruleConfig === 0) continue;
    if (schema.length === 0) {
      if (typeof ruleConfig !== "string")
        console.error(`Rule "${ruleId}" should have no options`);
    } else if (
      Array.isArray(schema) &&
      (!Array.isArray(ruleConfig) || schema.length !== ruleConfig.length - 1)
    ) {
      console.log(ruleId, schema, ruleConfig);
    } else {
      // ...
    }
  }
}
