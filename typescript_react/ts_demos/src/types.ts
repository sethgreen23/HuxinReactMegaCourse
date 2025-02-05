type info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = info & {
	isAdmin: boolean;
	permissions: string[];

};

export type { info , AdminInfoList };
