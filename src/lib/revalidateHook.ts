import { revalidatePath } from 'next/cache';
import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload';

export const revalidateCollectionHook: CollectionAfterChangeHook = async ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating cache due to collection change`);
  try {
    revalidatePath('/', 'layout');
  } catch (err) {
    payload.logger.error(`Error revalidating: ${err}`);
  }
  return doc;
};

export const revalidateGlobalHook: GlobalAfterChangeHook = async ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating cache due to global change`);
  try {
    revalidatePath('/', 'layout');
  } catch (err) {
    payload.logger.error(`Error revalidating: ${err}`);
  }
  return doc;
};
