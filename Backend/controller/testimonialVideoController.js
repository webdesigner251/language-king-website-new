import db from "../db/connection.js";

export const getTestimonialVideo = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM testimonial_video ORDER BY id DESC LIMIT 1"
    );
    if (rows.length === 0) {
      return res.status(200).json({
        id: null,
        video_url: "",
        video_placeholder_img: "",
        heading: "",
        description: "",
        student_name: "",
        student_tag: "",
        student_avatar: "",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching testimonial video:", error);
    res.status(500).json({
      error: "Failed to fetch testimonial video",
      details: error.message,
    });
  }
};

export const createOrUpdateTestimonialVideo = async (req, res) => {
  try {
    const {
      video_url,
      video_placeholder_img,
      heading,
      description,
      student_name,
      student_tag,
      student_avatar,
    } = req.body;

    console.log('Received data:', req.body);
    console.log('Parsed values:', {
      video_url: video_url || "",
      video_placeholder_img: video_placeholder_img || "",
      heading: heading || "",
      description: description || "",
      student_name: student_name || "",
      student_tag: student_tag || "",
      student_avatar: student_avatar || ""
    });

    // Check if a record already exists
    const [existingRecords] = await db.execute(
      "SELECT id FROM testimonial_video LIMIT 1"
    );

    if (existingRecords.length > 0) {
      // Update existing record
      await db.execute(
        "UPDATE testimonial_video SET video_url = ?, video_placeholder_img = ?, heading = ?, description = ?, student_name = ?, student_tag = ?, student_avatar = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        [
          video_url || "",
          video_placeholder_img || "",
          heading || "",
          description || "",
          student_name || "",
          student_tag || "",
          student_avatar || "",
          existingRecords[0].id,
        ]
      );
      res.json({
        id: existingRecords[0].id,
        message: "Testimonial video updated successfully",
        success: true,
      });
    } else {
      // Insert new record
      const [result] = await db.execute(
        "INSERT INTO testimonial_video (video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          video_url || "",
          video_placeholder_img || "",
          heading || "",
          description || "",
          student_name || "",
          student_tag || "",
          student_avatar || "",
        ]
      );
      res.status(201).json({
        id: result.insertId,
        message: "Testimonial video created successfully",
        success: true,
      });
    }
  } catch (error) {
    console.error("Error saving testimonial video:", error);
    res.status(500).json({
      error: "Failed to save testimonial video",
      details: error.message,
      success: false,
    });
  }
};

export const deleteTestimonialVideo = async (req, res) => {
  try {
    await db.execute("DELETE FROM testimonial_video");
    res.json({ message: "Testimonial video deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial video:", error);
    res.status(500).json({
      error: "Failed to delete testimonial video",
      details: error.message,
    });
  }
};
