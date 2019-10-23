<?php

namespace App\Controller;

use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

final class BookController extends AbstractController
{
    /**
     * @Route("/info", name="info")
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
}
