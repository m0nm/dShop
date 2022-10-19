import React, { useState } from "react";
import { Button, Modal } from "@/components/Shared";
import { useDeleteUser } from "@/features/account/hooks/useDeleteUser";

export const DeleteAccount = () => {
  const [open, setOpen] = useState(false);
  const { handleDelete, isLoading } = useDeleteUser();

  return (
    <div style={{ marginTop: "3rem" }}>
      <h4 className="sub-title">Account Action Zone</h4>

      <Button
        onClick={() => setOpen(true)}
        css={{ color: "white", backgroundColor: "$error !important" }}
      >
        Delete My Account
      </Button>

      <Modal open={open} onOpenChange={setOpen} type="delete-account">
        <div>
          <h4 className="sub-title">Delete Account</h4>
          <p>
            Are you sure you want to delete your account ? This action cannot be
            undone
          </p>

          <Button onClick={handleDelete} disabled={isLoading} variant="danger">
            Delete Account
          </Button>
        </div>
      </Modal>
    </div>
  );
};
