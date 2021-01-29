const ifCount = (owner: string, countOfficial: boolean) => {
  let result = true;
  if (!countOfficial) {
    if (owner === 'github' || owner === 'actions') {
      result = false;
    }
  }
  return result;
};

export type ACTION_TYPE = {
  owner: string;
  repo: string;
  version: string;
};

export type RESULT_TYPE = {
  name: string;
  actions: ACTION_TYPE[];
};

/**
 * @author xrkffgg
 * @description Analyze the action.yml requested by axios
 */
const analyzeActionYml = (param: string, countOfficial = true) => {
  const params: string[] = param.split(/\r\n|\n/g);
  const result: RESULT_TYPE = {
    name: '',
    actions: [],
  };
  params.forEach(item => {
    if (item && item.startsWith('name:')) {
      result.name = item.replace(/'|"|name:/g, '').trim();
    }
    if (item && item.trim().startsWith('uses:')) {
      const line = item.trim().replace(/'|"|uses:/g, '');
      const arr = line.split('@');
      const actionArr = arr[0].split('/');
      const version = arr[1];
      if (actionArr.length === 2 && ifCount(actionArr[0].trim(), countOfficial)) {
        result.actions.push({
          owner: actionArr[0].trim(),
          repo: actionArr[1].trim(),
          version,
        });
      }
    }
  });
  return result;
};

export default {
  analyzeActionYml,
};
