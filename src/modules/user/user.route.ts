import { Router } from "express";

import { UserHandler } from "./user.handler.js";

import { registerUserSchema, getUserByIdSchema } from "./user.validation.js";

import {
  validateBody,
  validateParams,
} from "../../shared/middlewares/validate.js";

import { asyncHandler } from "../../shared/utils/async-handler.js";

export const createUserRoutes = (userHandler: UserHandler) => {
  const router = Router();

  router.post(
    "/register",
    validateBody(registerUserSchema),
    asyncHandler(userHandler.register),
  );
  router.get(
    "/:id",
    validateParams(getUserByIdSchema),
    asyncHandler(userHandler.getUserById),
  );

  return router;
};
