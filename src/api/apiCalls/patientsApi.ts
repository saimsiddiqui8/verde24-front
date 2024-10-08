import { publicRequest } from "../requestMethods";
import { CreatePatientType, UserData } from "./types";

export const getPatientById = async (query: string, variables: { id: string }) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables });
    return response?.data?.data?.findPatientById;
  } catch (error) {
    console.error("Error fetching patient by ID:", error);
    throw error;
  }
};

export const updatePatientById = async (query: string, variables: { id: string; data: UserData }) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables });
    return response?.data?.data?.updatePatient;
  } catch (error) {
    console.error("Error updating patient:", error);
    throw error;
  }
};

export const getPatientToken = async (query: string, variables: { email: string, password: string }) => {
  try {
    const response = await publicRequest.post("/graphql", {
      query,
      variables,
    });
    return response?.data?.data?.getPatientToken;
  } catch (error) {
    console.error("Error updating patient:", error);
    throw error;
  }
};

export const createPatient = async (query: string, variables: CreatePatientType) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables: { data: variables } });
    return response?.data?.data?.createPatient;
  } catch (error) {
    console.error("Error creating patient:", error);
    throw error;
  }
};

export const findPatientByEmail = async (query: string, variables: { email: string }) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables });
    return response?.data?.data?.findPatientByEmail;
  } catch (error) {
    console.error("Error finding patient by email:", error);
    throw error;
  }
};

export const sendPatientOTP = async (query: string, variables: { email: string, role: string }) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables });
    return response?.data?.data?.createUserOtp;
  } catch (error) {
    console.error("Error sending patient OTP:", error);
    throw error;
  }
};

export const verifyPatientOTP = async (query: string, variables: { email: string, role: string, code: string }) => {
  try {
    const response = await publicRequest.post("/graphql", { query, variables });
    return response.data.data.verifyUserOtp;
  } catch (error) {
    console.error("Error verifying patient OTP:", error);
    throw error;
  }
};
