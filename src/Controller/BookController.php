<?php

namespace App\Controller;

use App\Entity\Book;
use App\Entity\Review;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\Publisher;
use Symfony\Component\Mercure\Update;
use Symfony\Component\HttpFoundation\Response;

final class BookController extends AbstractController
{
    /**
     * @Route("/book-info", name="info")
     */
    public function info() {
        return $this->render(
            'info.html.twig'
        );
    }

    /**
     * @Route("/book/{id}", name="book", requirements={"id"="\d+"})
     */
    public function getBook(
        Book $book
    ) {
        return $this->render(
            'book.html.twig',
            ['book' => $book]
        );
    }

    /**
     * @Route("/publish/{id}", name="publish", requirements={"id"="\d+"})
     */
    public function publish(Publisher $publisher, $id) {
        $em = $this->getDoctrine()->getManager();
        $book = $this->getDoctrine()
            ->getRepository(Book::class)
            ->findOneById($id);

        $comment = 'Text text text';

        $review = new Review();
        $review->book = $book;
        $review->author = 'asd';
        $review->rating = 10;
        $review->publicationDate = new \DateTime();
        $review->body = $comment;
        $em->persist($review);
        $em->flush();

        $update = new Update(
            sprintf('http://f4b766d2.ngrok.io/demo/books/%s.jsonld', $id),
            json_encode(['listComment' => $comment])
        );

        $globalUpdate = new Update(
            'http://f4b766d2.ngrok.io/demo/books',
            json_encode(['type' => 'newComment', 'target' => $id])
        );

        // The Publisher service is an invokable object
        $publisher($update);
        $publisher($globalUpdate);

        return new Response('new comment published');
    }
}
