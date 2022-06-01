export const getStorage = () => {
  const used_bytes = localStorage.getItem("used_bytes");
  const total_bytes = localStorage.getItem("total_bytes");

  const rem_bytes = total_bytes - used_bytes;

  const filled_per = (used_bytes / total_bytes) * 100;
  const rem_per = (rem_bytes / total_bytes) * 100;

  const rem_gb = rem_bytes / 1000000000;
  const used_gb = used_bytes / 1000000000;

  const data = {
    used_bytes,
    total_bytes,
    rem_bytes,
    filled_per,
    rem_per,
    rem_gb,
    used_gb,
  };

  localStorage.setItem("remaining_per", rem_per);
  localStorage.setItem("filled_per", filled_per);

  // console.log("storage data...", data)

  return data;
};

export const setStorage = (used, total) => {
  localStorage.setItem("used_bytes", used);
  localStorage.setItem("total_bytes", total);

  const data = getStorage();

  return data;
};
