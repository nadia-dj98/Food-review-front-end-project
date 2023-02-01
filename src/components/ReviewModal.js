import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

const ReviewModal = ({restaurant}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return ( 
        <div>
            <Button onClick={handleOpen}> Show reviews </Button>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <Box sx={style}>
                {restaurant.reviews.map((review, id) => {

                return (
                    <div key={id}>
                        <p>Name: {review.user.name}</p>
                        <p>Review: {review.reviewText}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Date: {review.date}</p>
                        <hr/>
                    </div>


                ) } )}
                </Box>
            </Modal>
        </div>
    );
}
 
export default ReviewModal;