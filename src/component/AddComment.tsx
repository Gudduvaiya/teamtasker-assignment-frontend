import { Button, Input } from "antd";
import { useState } from "react";
import { AddCommentAPI } from "../lib/services/APIServices";

const AddCommentSection = ({
  taskId,
  onCommentAdded,
}: {
  taskId: number;
  onCommentAdded: () => void;
}) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setLoading(true);
    AddCommentAPI({ content: comment, task_id: taskId })
      .then(() => {
        setComment("");
        setLoading(false);
        onCommentAdded();
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="flex gap-2 mt-2">
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        onPressEnter={handleAddComment}
        disabled={loading}
      />
      <Button
        type="primary"
        onClick={handleAddComment}
        loading={loading}
        disabled={!comment.trim()}
      >
        Add
      </Button>
    </div>
  );
};

export default AddCommentSection;
